import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  //message(message : string,messageType:MessageType,position : Position,delay: number=3,dismissOthers:boolean=false){ //parametre : tür //default deger için =
    message(message:string,options:Partial<AlertifyOptions>){

  alertify.set('notifier','delay',options.delay)
    alertify.set('notifier','position',options.position)
    const msj=alertify[options.messageType](message);
    if(options.dismisOthers) msj.dismissOthers();
    }
    dismiss(){
      alertify.dismissAll();
    }
  }

  export class AlertifyOptions{
  messageType:MessageType=MessageType.Message;
  position: Position=Position.BottomCenter;
  delay: number=3;
  dismisOthers:boolean=false;
  }

export enum MessageType{
  Error="error",
  Message= "message",
  Notify="notify",
  Success="success",
  Warning="warning"
}
export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomCenter="bottom-center",
  BottomRight="bottom-right",
  BottomLeft="bottom-left",
 // alertify.set('notifier','position','bottom-right');
  //alertify.success()

}
