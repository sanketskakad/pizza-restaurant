import { Request } from 'express';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export interface AdminRequestInterface extends Request {
  decodedToken?: DecodedIdToken;
  isAdmin?: boolean;
}
