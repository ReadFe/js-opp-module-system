class Table {
    constructor({columns, data}) {
        this.columns = columns;
        this.data = data;
        
    }
    
    makeHeader() {
        let header = document.createElement('thead')
        header.innerHTML = 
        `<tr>
            <th> ${this.columns[0]} </th>
            <th> ${this.columns[1]} </th>
        </tr>`

        return header
    }
    
    makeBody() {
        let body = document.createElement('tbody')
        body.innerHTML = 
        `<tr>
            <td>${this.data[0][0]}</td>  
            <td>${this.data[0][1]}</td>    
        </tr>`+
        `<tr>   
            <td>${this.data[1][0]}</td>  
            <td>${this.data[1][1]}</td>    
        </tr>`

        return body
    }
    
    makeTable() { 
        let raw = document.getElementById('table')
        let table = document.createElement('table')
        table.classList.add('table', 'table-hover')

        var thead = this.makeHeader()
        var tbody = this.makeBody()

        table.append(thead)
        table.append(tbody)
        
        raw.append(table)
        
    }

}

 

const run = new Table({
    columns : ['Name', 'Email'],
    data : [
        ['John Chena', 'johnchena@gmail.com'],
        ['John Wick', 'johnwick@gmail.com']
    ]
}) 
run.makeTable()


export {run};