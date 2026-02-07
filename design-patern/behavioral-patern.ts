// Observer pattern example in TypeScript
// The observer pattern is a design pattern in which an object,
// called the subject, maintains a list of its dependents, called observers, 
// and notifies them automatically of any state changes, 
// usually by calling one of their methods.    
// The observer pattern is often used 
// when you want to create a one-to-many 
// relationship between objects, where one object
// (the subject) can notify multiple other objects (the observers) 
//  of changes in its state.

// example of observer pattern
interface Observer {
    update(message: string): void;
}
class Subject {
    private observers: Observer[] = [];
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    public removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    public notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }   
    }
}   

class ConcreteObserver implements Observer {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }       
    update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");   
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers("Hello Observers!"); // Output: Observer 1 received message: Hello Observers! 
                                            //         Observer 2 received message: Hello Observers!        
subject.removeObserver(observer1);
subject.notifyObservers("Hello again!"); // Output: Observer 2 received message: Hello again!


