//copied and modified from: https://github.com/Coldani3/InteractiveWebNewUCP/blob/master/src/EventBus.js
//it's my own code from a previous project

class EventBus {
    events = {};
  
    emit(eventName, data = {}) {
    	if (this.events[eventName]) {
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
export const SortingUpdate = "SortingUpdate";