class VehicleBad {
  private position = 0

  public advance(velocity: number) {
    if (velocity < 0 || velocity > 200) {
      throw new Error('Invalid Velocity')
    }
    this.position += velocity
  }

  public getPosition(): number {
    return this.position
  }
}

class ScooterBad extends VehicleBad {
  public advance(velocity: number) {
    if (velocity > 100) {
      throw new Error('Invalid Velocity')
    }
  }
}

function advanceVehicleBad(vehicle: VehicleBad, velocity: number) {
  vehicle.advance(velocity)
}

const vehicleBad = new VehicleBad()
const scooterBad = new ScooterBad()

const velocity = 150

advanceVehicleBad(vehicleBad, velocity) // OK
advanceVehicleBad(scooterBad, velocity) // Error

/* 
  Se viola el principio porque la respuesta
  de una u otra es distinta. Para el vehiculo
  avanza sin problema, pero para el scooter
  lanza un error.

  En estos casos se debe preguntar si la relación
  que existe entre ambas clases es realmente de
  herencia.
*/

// Good Implementation

interface Vehicle {
  advance(velocity: number): void
  getPosition(): number
}

class Car implements Vehicle {
  private position = 0

  public advance(velocity: number) {
    if (velocity < 0 || velocity > 200) {
      throw new Error('Invalid Velocity')
    }
    this.position += velocity
  }

  public getPosition(): number {
    return this.position
  }
}

class Scooter implements Vehicle {
  private position = 0

  public advance(velocity: number) {
    if (velocity > 100) {
      throw new Error('Invalid Velocity')
    }
  }

  public getPosition(): number {
    return this.position
  }
}

function advanceVehicle(vehicle: Vehicle, velocity: number) {
  vehicle.advance(velocity)
}

const car = new Car()
const scooter = new Scooter()

advanceVehicle(car, velocity) // OK
advanceVehicle(scooter, velocity) // Error
