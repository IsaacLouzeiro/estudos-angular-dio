/**
 * Variaveis
 * */

//tipos primitivos: boolean, number, string
  let ligado: boolean = false
  let nome: string = "Isaac"
  let idade: number = 21
  let altura: number = 1.8


//tipos especiais: null, undefined
  let nulo : null = null
  let indefinido : undefined = undefined

//tipos abrangentes: any, void
let retorno : void
let retornoView : any = false

//objeto - sem previsibilidade
let produto : object = {
  name: "Isaac",
  cidade: "SP",
  idade: 21
}

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string
  preco: number
  unidades: number
}

let meuProduto: ProdutoLoja = {
  nome: "Tenis",
  preco: 89.99,
  unidades: 10
}

/**
 * Arrays
 * */

let dados: string[] = ["Isaac", "Maria", "Joao"]
let dados2: Array<string> = ["Isaac", "Maria", "Joao"]

let infos: (string | number)[] = ["Isaac", 21, 1.80]

/**
 * Tuplas
 * */

let boleto: [string, number, number] = ["Agua conta", 199.90, 34223423]

/**
 * Arrays métodos
 * */

dados.pop()

/**
 * Datas
 * */

let aniversario: Date = new Date("2022-12-01 05:00")
// console.log(aniversario.toString())

//funções
function addNumber(x: number, y: number): number {
  return x + y
}

function addToHello(name: string): string {
  return `Hello, ${name}`
}

function CallToPhone(phone: number | string): number | string {
  return phone
}

async function getDatabase(id: number): Promise<string> {
  return "Isaac"
}

let soma: number = addNumber(4, 7)

// console.log(CallToPhone(1133882232))

//interface (type x interface)
type robot = {
  readonly id: number | string
  name: string
}

interface robot2 {
  readonly id: number | string
  name: string
  sayHello(): string
}

const bot1: robot = {
  id: 1,
  name: "megaman"
}

const bot2: robot2 = {
  id: 1,
  name: "megaman",
  sayHello: function (): string {
    throw new Error("Function not implemented.")
  }
}

// console.log(bot1)
// console.log(bot2)

class Pessoa implements robot2 {
  id: string | number
  name: string

  constructor(id: string | number, name: string) {
    this.id = id
    this.name = name
  }
  
  sayHello(): string {
    return `Hello, i'm ${this.name}`
  }

}

const p = new Pessoa(1, "Gutsman")
// console.log(p.sayHello())

//classes

/*
  data modifiers
  public
  private
  protected
*/

class Character {
  protected name?: string
  readonly strength: number
  skill: number

  constructor(name: string, strength: number, skill: number) {
    this.name = name
    this.strength = strength
    this.skill = skill
  }
  
  attack(): void {
    console.log(`Attack with ${this.strength} points`)
  }
}
//Character: superclass
//Magician: subclass
class Magician extends Character {
  magicPoints: number
  constructor(name: string, strength: number, skill: number, magicPoints: number) {
    super(name, strength, skill)
    this.magicPoints = magicPoints
  }
}


const p1 = new Character("Ryu", 10, 98)

const p2 = new Magician("Mago", 9, 30, 100)

//generics
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1,5], [3])
const stgArray = concatArray<string[]>(['Isaac', 'Louzeiro'], ['Elias'])

// console.log(numArray)
// console.log(stgArray)

//decorators
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, {__version: version})
  }
}

// @apiVersion("1.10")

//attribute decorator
function minLenght(length: number) {
  return (target: any, key: string) => {
    let _value = target[key]

    const getter = () => _value
    const setter = (value: string) => {
      if(value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`)
      } else {
        _value = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}

class Api {
  @minLenght(10)
  name: string
  
  constructor(name: string) {
    this.name = name
  }
}

const api = new Api("Paralelepipedo")

console.log(api.name)
