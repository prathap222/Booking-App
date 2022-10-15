import express from "express";
import { createHotel,updateHotel,deleteHotel,getHotel,getHotels  } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"


const router = express.Router();

// router.get("/", (req,res)=> {
//   res.send("Hello,This is hotels endpoint")
// })

// CREATE
router.post("/",verifyAdmin,createHotel);

// UPDATE
router.put("/:id",verifyAdmin,updateHotel);

//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);

//GET
router.get("/:id",getHotel);

// GET ALL
router.get("/",getHotels);



export default router