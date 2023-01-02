import { redisUtils } from ".";

interface IResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
}

export const getBearerToken = async () => {
  try {
    let token = await useStorage().getItem(redisUtils.keys.temp.token);
    if (!token) {
      const { API_URL, API_ACCESS_KEY, API_SECURE_ACCESS_KEY } = process.env;

      const url = `${API_URL}/api/oauth/token`;
      const response = await $fetch<IResponse>(url, {
        method: "post",
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: API_ACCESS_KEY,
          client_secret: API_SECURE_ACCESS_KEY,
        }),
      });

      token = `${response.token_type} ${response.access_token}`;

      await useStorage().setItem(redisUtils.keys.temp.token, token);
    }
    return token;
  } catch (e) {
    await useStorage().removeItem(redisUtils.keys.temp.token);
    throw new Error(`getBearerToken: ${e}`);
  }
};
