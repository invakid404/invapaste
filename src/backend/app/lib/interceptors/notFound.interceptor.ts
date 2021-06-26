import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, stream$: CallHandler): Observable<any> {
    return stream$.handle().pipe(
      tap((data) => {
        if (data == null) {
          throw new NotFoundException();
        }
      }),
    );
  }
}
