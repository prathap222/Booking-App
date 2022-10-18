import express from "express";
import { createHotel,updateHotel,deleteHotel,getHotel,getHotels, countBycity  } from "../controllers/hotel.js";
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
router.get("/find/:id",getHotel);

// GET ALL
router.get("/",getHotels);
router.get("/countByCity",countBycity);
router.get("/countBYType",getHotels);



export default router