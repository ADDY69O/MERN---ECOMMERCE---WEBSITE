class Apifeatures{
    constructor(query,queryStr){
        //query->> product
        this.query=query;
        //queryStr->> it is the query that passes after ?
        this.queryStr=queryStr;
    }

    search(){
        const  keyword=this.queryStr.keyword?{

            name:{
                $regex:this.queryStr.keyword,
                $options:"i",
            },

        }:{}

        this.query=this.query.find({...keyword});
        return this;

    }

    filter(){
        const queryCopy={...this.queryStr};
        // console.log(queryCopy);
        //removing this fields from the query
        const removeFields=["keyword","page","limit"];

        removeFields.forEach((key)=> delete queryCopy[key]);

        // console.log(queryCopy);
        //Filter for the price and the rating 
        
        let queryStr=JSON.stringify(queryCopy);
        queryStr= queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=> `$${key}`);
        
        queryStr=JSON.parse(queryStr);
        // console.log(queryStr);

        this.query=this.query.find(queryStr);
        return this;

    }

    pagination(productPerPage){
        const currentPage = this.queryStr.page || 1;

        const skip= productPerPage * (currentPage -1);

        this.query=this.query.limit(productPerPage).skip(skip);
        return this;


    }



}

module.exports = Apifeatures;