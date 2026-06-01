export interface ContactPayload {
  name: string;
  phone: string;
  message: string;
}

export async function submitContact(payload: ContactPayload) {
  await new Promise((resolve) => window.setTimeout(resolve, 700));

  return {
    ok: true,
    protocol: `HZ-${Date.now().toString().slice(-6)}`,
    payload,
  };
}
