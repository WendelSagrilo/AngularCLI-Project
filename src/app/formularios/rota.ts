export class Rota {
    origem:string
    pontoParada:string[]
    destino:string
    uf:string
    cep:string
    rotaRapida:boolean
    rotaCurta:boolean
    ordemSequencial:boolean
    ordemOtimizada:boolean
    valorCombustivel:number
    consumoCombustivel: number
    veiculo:Veiculo
}

export class Veiculo{
    categoria:string
    descricao: string
    urlImg?: string
}
