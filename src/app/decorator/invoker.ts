import { apiForClass } from './api.decorator';
import { api } from './api.decorator';

@apiForClass
export class Invoker {
  @api({
    title: 'start to invoke',
    description: 'description for this api'
  })
  start() {
    console.debug('Invoker start with:');
    const it: any = this;
    console.debug(it.apiInfo);
  }
}
