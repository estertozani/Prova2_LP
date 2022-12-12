const express = require("express");

const Team = require("../model/TeamModel");

const routes = express.Router();

routes.get("/", async(req, res)=>{
    try{
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch(error) {
        res.status(500).json({error: error});
    }
});

routes.post("/", async(req, res) =>{
    const team = req.body;
    try{
        await Team.create(team);

        res.status(201).send("Time inserido com sucesso");
    } catch( error) {
        res.status(500).json({error: error});
    }
});

routes.delete("/:name", async(req, res) =>{
    const name = req.params.name

    try{
        const filter = { name : name};
        await Team.deleteOne(filter)
        res.status(201).send("time deletado com sucesso")
    }catch(error) {
        res.status(500).json({ error: error})
    }
});

routes.put("/:name", async(req, res) =>{
    const name = req.params.name
    const team = req.body;

    try{
        const filter = { name : name };
        await Team.findOneAndUpdate(filter, team, {
  returnOriginal: false
});
        res.status(201).send("time alterado com sucesso")
    }catch(error) {
        res.status(500).json({ error: error})
    }
})


module.exports = routes;