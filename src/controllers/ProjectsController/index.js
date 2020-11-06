const connection=require('../../database/connection');
const crypto=require('crypto');


module.exports={
    async index (request,response) {
        // const {page=1} = request.query;

        // const [count]=await connection('incidents').count();

         const ongs=await connection('projects')
        // .join("ongs", "ongs.id", "=", "incidents.ong_id")
        // .limit(5)
        // .offset((page-1)*5)
         .select(['projects.*']);

        // response.header('X-Total-count',count['count(*)']); 
        return response.json(ongs);
        //return response.send('Ok')
    },
    async create(request,response){
        const {xml}=request.body;
        console.log("Enter");
            // const ong_id=request.headers.authorization;
            // console.log(ong_id);
            const [id]= await connection('projects').insert({
                name: "Teste",
                xml,                
            });
            return response.send(""+id);
    },
    async update(request,response){
        const {xml, id}=request.body;
        console.log(id);

            await connection('projects').where({'id': id})
            .update({
                xml: xml
            })
            .then(function(numberOfUpdatedRows) {
                if(numberOfUpdatedRows) {                   
                    return response.send("Ok ");
                }
            }).catch(function(err){
                console.log(err);
                return response.send("Erro");
                return;         
            }); 

            
    },
};