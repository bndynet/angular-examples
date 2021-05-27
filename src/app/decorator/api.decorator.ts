export function api(args: { title: string; description?: string }) {
  console.log(`has api with ${args.title}, ${args.description}`);
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    target.apiInfo = args;
    console.log('api(): called with:');
    console.log(arguments);
  };
}

export function apiForClass(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.debug('apiForClass:');
  console.debug(constructor);
}
