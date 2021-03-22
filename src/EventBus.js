//copied and modified from: https://github.com/Coldani3/InteractiveWebNewUCP/blob/master/src/EventBus.js
//it's my own code from a previous project

class EventBus {
    events = {};
  
    emit(eventName, data = {}) {
    	if (this.events[eventName]) {
    		for (let i = 0; i < this.events[eventName].length; i++) {
    			if (this.events[eventName][i]) {
    				this.events[eventName][i](data);
    			}
    		}
    	}
    }
    on(eventName, onEventFunc) {
    	if (!(eventName in this.events)) {
    		this.events[eventName] = [];
    	}
    	this.events[eventName].push(onEventFunc);
    }
    off(eventName, eventFunc) {
    	this.events[eventName][this.events[eventName].indexOf(eventFunc)] = undefined;
    }
}
  
export const eventBus = new EventBus();

export const NewsBoxClick = "NewsBoxClick";
//hacky but lol
export const ForceUpdate = "ForceUpdate";
export const NewsBoxDelete = "NewsBoxDelete";
export const SortingUpdate = "SortingUpdate";
export const StatusBarShouldUpdate = "StatusBarShouldUpdate";
export const WarningBoxVisibilityUpdate = "WarningBoxVisibilityUpdate";