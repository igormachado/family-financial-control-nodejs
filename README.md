### NodeJS API de controle financeiro familiar

**Tecnologias usadas**

- Nodejs
  
- Prisma ORM
  
- Postgres
  
- Typescript
  

#### Gettinn Started

1. **Faça o download do projeto.**
  
  ```bash
  https://github.com/igormachado/family-financial-control-nodejs.githttps://github.com/igormachado/family-financial-control-nodejs.git
  ```
  
2. **Instalar as dependências do projeto, npm**
  

```bash
cd family-financial-control-nodejs
npm install        
```

3 - Realizar um migrate no Prisma ORM.

```bash
npx prisma migrate dev
```

#### Entendendo o projeto NodeJS API de controle financeiro familiar

**GET**

- routes.get("/income", listAllIncomeController.handle);
  
  - Esta rota lista todos os dados de entrada (income).
    
  - ***Listando todos os incomes.***
    

```js
// Lista todos os incomes. Buscando por todos os id.
export class ListAllIncomeUseCase {
  async execute({ id_income }: IListAllIncomes) {
    const incomes = await prisma.income.findMany({
      where: {
        id: id_income,
      },
      select: {
        id: true,
        description: true,
        payment: true,
        date: true,
      },
    });

    return incomes;
  }
}
```

- routes.get("/income/:id", listAllIncomeController.handle);
  
  - Esta rota lista um dado de entrada (income) buscando pelo id.
    
- ***Lista o income espeícfico pelo id.***
  

```js
// Lista todos os incomes. Buscando por todos os id.
export class ListAllIncomeUseCase {
  async execute({ id_income }: IListAllIncomes) {
    const incomes = await prisma.income.findMany({
      where: {
        id: id_income,
      },
      select: {
        id: true,
        description: true,
        payment: true,
        date: true,
      },
    });

    return incomes;
  }
}
```

- routes.get("/spend", listAllSpendController.handle);
  
  - Esta rota lista todos os dados de saída (outcome).
    
- ***Lista todos os outcome que existem no banco de dados.***
  

```js

export class ListAllSpendsUseCase {
  async execute({ id_spend }: IListSpends) {
    const listAllSpends = await prisma.spends.findMany({
      where: {
        id: id_spend,
      },
    });

    return listAllSpends;
  }
}
```

- routes.get("/spend/:id", listAllSpendController.handle);
  
  - Esta rota lista um dado de saída (outcome) buscando pelo id.
    
- Lista um outcome específico, bucando pelo id.
  

```js

export class ListAllSpendsUseCase {
  async execute({ id_spend }: IListSpends) {
    const listAllSpends = await prisma.spends.findMany({
      where: {
        id: id_spend,
      },
    });

    return listAllSpends;
  }
}
```

**POST**

- ***routes.post("/income", createIncomeController.handle);***
  
  - Esta rota cria um dado de entrada (income).
    
  - **BODY**:
    
    - *description: string*. Descrição do income
      
    - *payment: number*. Quantidade que entrou
      
    - *date: string*. A data do pagamento
      
  - ***Criando um income***
    
  
  ```js
  /*
      É feita uma verificação para previnir que o income não 
      ocorra duas vezes. Buscando pela data e descrição.
  */
  
  export class CreateIncomeUseCase {
    async execute({ description, payment, date }: ICreateIncome) {
      const incomeExists = await prisma.income.findFirst({
        where: {
          description: {
            equals: description,
            mode: "insensitive",
          },
          date: {
            equals: date,
            mode: "insensitive",
          },
        },
      });
  
      if (description && incomeExists) {
        throw new Error("This income already exists.");
      }
  
      // A criação do pagamento ser
      const createIncome = await prisma.income.create({
        data: {
          description,
          payment,
          date,
        },
      });
  
      return createIncome;
    }
  }
  ```
  
- ***routes.post("/spend", createSpendController.handle);***
  
  - Esta rota cria um dado de saĩda (outcome)
    
  - **BODY:**
    
    - *description: string.* Descrição do income
      
    - *payment: number.* Quantidade que entrou
      
    - *date: string.* A data do pagamento
      
  - ***Criando um outcome***
    

```js
/*
    É feita uma verificação para previnir que a saída (outcome) não 
    ocorra duas vezes. Buscando pela data e descrição.
*/

export class CreateSpendsUseCase {
  async execute({ description, payment, date }: ICreateSpend) {
    const spendExists = await prisma.spends.findFirst({
      where: {
        description: {
          equals: description,
          mode: "insensitive",
        },
        date: {
          equals: date,
          mode: "insensitive",
        },
      },
    });

    if (description && spendExists) {
      throw new Error("This spend already exists.");
    }
    
// Neste caso a criação da saída é realizado (outcome)
    const createSpend = await prisma.spends.create({
      data: {
        description,
        payment,
        date,
      },
    });

    return createSpend;
  }
}
```

**PUT**

- ***routes.put("/income/:id", updateIncomeController.handle);***
  
  - Esta rota realiza uma atualização do dado de entrada (income) pelo id
    
- ***Criando um update no income.***
  

```js

/*
    Realizar um update no income. Buscando pelo se o id existir.
*/

export class UpdateIncomeUseCase {
  async execute({ id_income, description, payment, date }: IUpdateIncome) {
    const updateIncome = await prisma.income.update({
      where: {
        id: id_income,
      },
      data: {
        description,
        payment,
        date,
      },
    });

    return updateIncome;
  }
}
```

- ***routes.put("/spend/:id", updateSpendController.handle);***
  
  - Esta rota realiza uma atualização do dado de saída (outcome) pelo id
    
- ***Criando um update no outcome.***
  

```js
// Realizada um update no outcome, caso exista no banco de dados.
// buscando pelo id
export class UpdateSpendUseCase {
  async execute({ id_spend, description, payment, date }: IUpdateSpend) {
    const updateSpend = await prisma.spends.update({
      where: {
        id: id_spend,
      },
      data: {
        description,
        payment,
        date,
      },
    });

    return updateSpend;
  }
}
```

**DELETE**

- ***routes.delete("/income/:id", deleteIncomeController.handle);***
  
  - Esta roda deleta um dado de entrada (income) pelo id
    
- ***Deletando um income, caso exista.***
  

```js
// realizado o delete do income, caso exista no banco de dados.
// buscando pelo id
export class DeleteIncomeUseCase {
  async execute({ id_income }: IDeleteIncome) {
    const deleteIncome = await prisma.income.delete({
      where: {
        id: id_income,
      },
    });

    return deleteIncome;
  }
}
```

- ***routes.delete("/spend/:id", deleteSpendController.handle);***
  
  - Esta rota deleta um dado de saĩda (outcome) pelo id
    
- ***Deletando um outcome, caso exista.***
  

```js
// realizado o delete do outcome, caso exista no banco de dados
// buscando pelo id
export class DeleteSpendUseCase {
  async execute({ id_spend }: IDeleteSpend) {
    const deleteSpend = await prisma.spends.delete({
      where: {
        id: id_spend,
      },
    });

    return deleteSpend;
  }
}
```