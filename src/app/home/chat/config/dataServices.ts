import { ErrorToast } from "@/components/toast/error";
export const sendResponseToApi = async (response: string, onSendMessage: (message: string) => void, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setError: React.Dispatch<React.SetStateAction<string | null>>) => {
  setLoading(true);
  setError(null);
  onSendMessage(response);

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL_API}`;
    console.log("API URL:", apiUrl);
    const res = await fetch(apiUrl, {
      method: "GET"
    });

    if (!res.ok) {
      throw new Error("Failed to send response");
    }
    const data = await res.text();
    console.log("Response Data:", data);
  } catch (err) {

    ErrorToast();
    setError("There was an error sending the request");
    console.error(err);
  } finally {
    setLoading(false);
  }
};
