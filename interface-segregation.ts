interface Workable {
  canCode(): boolean
  code(): string | void
  test(): string
}

class ProgrammerBad implements Workable {
  public canCode() {
    return true
  }

  public code() {
    return 'coding'
  }

  public test() {
    return 'testing in localhost'
  }
}

class TesterBad implements Workable {
  public canCode() {
    return false
  }

  public code() {
    throw new Error("Oops! I can't code")
  }

  public test() {
    return 'testing in test server'
  }
}

class ProjectManagementBad {
  public processCode(member: Workable) {
    if (member.canCode()) member.code()
  }
}

/*
  El método code() en la clase de tester
  siempre arroja una excepción, lo cual no
  tiene sentido. Es mejor segregar 2 interfaces
  porque una clase puede implementar varias
  interfaces.

  Así el ProjectManagement puede recibir en
  processCode un miembro que es Coder y siempre
  va a existir el metodo code(), por ende no hay
  que preguntar si canCode()
*/

interface Codable {
  code(): string
}

interface Testable {
  test(): string
}

class Programmer implements Codable, Testable {
  public code() {
    return 'coding'
  }

  public test() {
    return 'Testing in localhost'
  }
}

class Tester implements Testable {
  public test() {
    return 'Testing in test server'
  }
}

class ProgramManagement {
  public processCode(member: Codable) {
    member.code()
  }
}
