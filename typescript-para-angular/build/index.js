"use strict";
/**
 * Variaveis
 * */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Isaac";
let idade = 21;
let altura = 1.8;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "Isaac",
    cidade: "SP",
    idade: 21
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 10
};
/**
 * Arrays
 * */
let dados = ["Isaac", "Maria", "Joao"];
let dados2 = ["Isaac", "Maria", "Joao"];
let infos = ["Isaac", 21, 1.80];
/**
 * Tuplas
 * */
let boleto = ["Agua conta", 199.90, 34223423];
/**
 * Arrays métodos
 * */
dados.pop();
/**
 * Datas
 * */
let aniversario = new Date("2022-12-01 05:00");
// console.log(aniversario.toString())
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello, ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Isaac";
    });
}
let soma = addNumber(4, 7);
const bot1 = {
    id: 1,
    name: "megaman"
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
// console.log(bot1)
// console.log(bot2)
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Gutsman");
console.log(p.sayHello());
//classes
/*
  data modifiers
  public
  private
  protected
*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
//Character: superclass
//Magician: subclass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(['Isaac', 'Louzeiro'], ['Elias']);
console.log(numArray);
console.log(stgArray);
//decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype), { __version: version };
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.0")
], Api);
const api = new Api();
console.log(api.__version);
