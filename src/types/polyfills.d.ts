interface CredentialRequestOptions { otp: OTPOptions; }
interface OTPOptions { transport: string[]; }
interface CredentialType extends Credential { code?: string };