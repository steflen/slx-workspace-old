import { JwtStrategy } from './jwt.strategy';
import { LocalStrategySignIn, LocalStrategySignUp } from './local.strategy';

export const AUTH_PASSPORT_STRATEGIES = [LocalStrategySignIn, LocalStrategySignUp, JwtStrategy];
