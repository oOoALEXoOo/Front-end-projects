const EventEmitter = require('events');

// const emitter = new EventEmitter();
//
// emitter.on('anything', data => {
//   console.log('ON: anything', data);
// });
//
// emitter.emit('anything', { a: 1 });
// emitter.emit('anything', { b: 2 });
//
// setTimeout(() => {
//   emitter.emit('anything', { c: 3 });
// }, 1500);

class Dispatcher extends EventEmitter {
  subscribe(event, cb) {
    console.log('[Subscribe...]')
    this.on(event, cb);
  }

  dispatch(event, data) {
    console.log('[Dispatching...]')
    this.emit(event, data)
  }
}

const dis = new Dispatcher();

dis.subscribe('aa', data => {
  console.log('ON aa:', data)
});

dis.dispatch('aa', { aa: 22 });
