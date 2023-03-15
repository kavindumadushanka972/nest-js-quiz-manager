import { JwtModuleAsyncOptions } from "@nestjs/jwt";
import authConfig from "./auth.config";

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: authConfig().jwtSecret,
      signOptions: { expiresIn: '1d' },
    }
  }
};