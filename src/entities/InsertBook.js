//CLASSE QUE IRÁ CONTER ATRIBUTOS E MÉTODOS DE INSERÇÃO DE LIVROS

class InsertBook{
    constructor(title, author, category, place, qtePage, date, img,){
        this.title = title
        this.author = author
        this.category = category
        this.place = place
        this.qtePage = qtePage
        this.date = date
        this.img = img
    }

    Validator(){
        this.Equal()
        this.CheckString()

    }

    CheckString(){

    }

    //CHECAR SE HÁ UM LIVRO CADASTRADO COM OS MESMOS ATRIBUTOS
    Equal(){

    }
}