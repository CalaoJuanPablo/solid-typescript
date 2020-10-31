class EmailSenderBad {
  public send(userEmail: string, message: string) {
    console.log(
      `Sent message: ${message}
      via email to: ${userEmail}
      `
    )
  }
}

class SmsSenderBad {
  public send(userCellPhone: string, message: string) {
    console.log(
      `Sent message: ${message}
      via SMS to: ${userCellPhone}
      `
    )
  }
}

class WhatsAppSenderBad {
  public send(userCellPhone: string, message: string) {
    console.log(
      `Sent message: ${message}
      via WhatsApp to: ${userCellPhone}
      `
    )
  }
}

class User {
  private email: string
  private cellPhone: string

  public getEmail() {
    return this.email
  }

  public getCellPhone() {
    return this.cellPhone
  }
}

class NotifierBad {
  private emailSender: EmailSenderBad
  private smsSender: SmsSenderBad
  private whatsAppSender: WhatsAppSenderBad

  constructor() {
    this.emailSender = new EmailSenderBad()
    this.smsSender = new SmsSenderBad()
    this.whatsAppSender = new WhatsAppSenderBad()
  }

  public notify(user: User, severity: number, message: string) {
    this.emailSender.send(user.getEmail(), message)

    if (severity > 1) {
      this.whatsAppSender.send(user.getCellPhone(), message)
    }

    if (severity > 2) {
      this.smsSender.send(user.getCellPhone(), message)
    }
  }
}

/*
  Se crea una dependencia dura entre la clase
  Notifier y sus clases auxiliares, creando los
  objetos directamente en el constructor de la
  clase. Mejor sería recibirlos por parámetro

  Las clases de sender deberían ser interfaces
  para que se creen clases que implementen esas
  interfaces y poder cambiar las instancias de
  cada sender hacia el servicio que se utilice
*/

interface IEmailSender {
  send(email: string, message: string): void
}

interface ISMSSender {
  send(cellphone: string, message: string): void
}

interface IChatSender {
  send(cellphone: string, message: string): void
}

class Notifier {
  private emailSender: IEmailSender
  private smsSender: ISMSSender
  private chatSender: IChatSender

  constructor(
    emailSender: IEmailSender,
    smsSender: ISMSSender,
    chatSender: IChatSender
  ) {
    this.emailSender = emailSender
    this.smsSender = smsSender
    this.chatSender = chatSender
  }

  public notify(user: User, severity: number, message: string) {
    this.emailSender.send(user.getEmail(), message)

    if (severity > 1) {
      this.chatSender.send(user.getCellPhone(), message)
    }

    if (severity > 2) {
      this.smsSender.send(user.getCellPhone(), message)
    }
  }
}

/* Clases de los diferentes servicios */

class SendEmailViaHotmail implements IEmailSender {
  public send(userEmail: string, message: string) {
    console.log(
      `Sent message: ${message}
      via hotmail to: ${userEmail}
      `
    )
  }
}

class SendEmailViaGmail implements IEmailSender {
  public send(userEmail: string, message: string) {
    console.log(
      `Sent message: ${message}
      via gmail to: ${userEmail}
      `
    )
  }
}

class SendSMSViaTwilio implements ISMSSender {
  public send(userCellPhone: string, message: string) {
    console.log(
      `Sent message: ${message}
      via SMS to: ${userCellPhone}
      through Twilio
      `
    )
  }
}

class SendChatViaWhatsApp implements IChatSender {
  public send(userCellPhone: string, message: string) {
    console.log(
      `Sent message: ${message}
      via WhatsApp to: ${userCellPhone}
      `
    )
  }
}

class SendChatViaTelegram implements IChatSender {
  public send(userCellPhone: string, message: string) {
    console.log(
      `Sent message: ${message}
      via Telegram to: ${userCellPhone}
      `
    )
  }
}
