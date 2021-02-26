//copied from: https://github.com/Coldani3/InteractiveWebNewUCP/blob/master/src/EventBus.js

class EventBus {
    events = {};
  
    emit(eventName, data = {}) {
      if (this.events[eventName].length > 0) {
        for (let i = 0; i < this.events[eventName].length; i++) {
          this.events[eventName][i](data);
        }
      }
    }
    on(eventName, onEventFunc) {
      if (!(eventName in this.events)) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(onEventFunc);
    }
  }
  
  export const eventBus = new EventBus();

  export const NewsBoxClick = "NewsBoxClick";
  //hacky but lol
  export const ForceUpdate = "ForceUpdate";
  export const NewsBoxDelete = "NewsBoxDelete";