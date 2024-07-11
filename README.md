Subject


Subject and Behavioural Subject are observables but used for casting purpose. When data comes to Subject/Behavioural Subject then it sends the data to all the subscribers.





subjectValue = new Subject();

constructor() {
this.subjectValue.subscribe((value: any) => {
console.log("Subscriber 1", value);
})
this.subjectValue.next("Emission 1");

this.subjectValue.subscribe((value: any) => {
console.log("Subscriber 2", value);
})
}



Output

Subscriber 1 Emission 1


Here ‘Subscriber 1 Emission 1’ is only coming as input because before next ( i.e  ‘this.subjectValue.next("Emission 1")  )  how many subscribers are there they only will subscribe the value . Hence the second subscriber will not subscribe value because it comes after the emission (that is the next   (   i.e   this.subjectValue.next("Emission 1"); )  given before the second subscription) 



Here is another example




ts file



subjectValue = new Subject();

constructor() {
this.subjectValue.subscribe((value: any) => {
console.log("Subscriber 1", value);
})
this.subjectValue.next("Emission 1");

this.subjectValue.subscribe((value: any) => {
console.log("Subscriber 2", value);
})

this.subjectValue.next("Emission 2");

}


Output




 the ouptut is shown below because there is next after the second subscribtion Subscriber 2 and the first subscriber ( i.e Subscriber 1 ) will be called twice next since it has 2 subsciber before the second next.



Subscriber 1 Emission 1
Subscriber 1 Emission 2
Subscriber 2 Emission 2




Before next whoever all subscribes they only will recieve the value and the Subject will not have any default value.








 Behavioural Subject




behaviorSubjectValue = new BehaviorSubject('');

constructor() {
this.behaviorSubjectValue.subscribe((value: any) => {
console.log("Subscriber 1", value);
})
}




Output 



Subscriber 1 




Here behavior subject was initiallized to null  ( i.e.   behaviorSubjectValue = new BehaviorSubject('')    ) , hence the behaviorsubject will get the default value as null  ( hence output is ‘Subscriber 1’  (i.e with out any value since initial value is null )   )  even if we did not emit the value (i.e using next) .





Next example of  Behavioural Subject




behaviorSubjectValue = new BehaviorSubject('');

constructor() {
this.behaviorSubjectValue.subscribe((value: any) => {
console.log("Subscriber 1", value);
})
this.behaviorSubjectValue.next("Emission 1");
}




Output 


Subscriber 1 
Subscriber 1 Emission 1



Behavior subject will emit the previous value that is default value ( i.e.  ‘Subscriber 1 ‘  shown int he output )  and the next value emitted is also coming in the output. ( i.e.  ‘Subscriber 1 Emission 1 ‘  shown int he output ) 




behaviorSubjectValue = new BehaviorSubject('');

constructor() {
this.behaviorSubjectValue.subscribe((value: any) => {
console.log("Subscriber 1", value);
})
this.behaviorSubjectValue.next("Emission 1");

this.behaviorSubjectValue.subscribe((value: any) => {
console.log("Subscriber 2", value);
})

this.behaviorSubjectValue.next("Emission 2");

}




Output


Subscriber 1 
Subscriber 1 Emission 1
Subscriber 2 Emission 1
Subscriber 1 Emission 2
Subscriber 2 Emission 2



Here first value of subscriber is null ( hence   ‘ Subscriber 1 ‘  is given as the ouput initially ).  Next when the first emission happens the new value that is ‘Emission 1’ is subscibed in both subscribers . Next when the second emission happens the new value that is ‘Emission 2’ is subscibed in both subscribers . 

In behaviorSubject the default value will be subscribed even if the behaviorSubject do not emit any value ( i.e next ) . When emission happens (i.e next) then all the subscribers using behaviorsubject will get the emitted value. 



