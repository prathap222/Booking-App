import express from "express";
import { createHotel,updateHotel,deleteHotel,getHotel,getHotels  } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

// router.get("/", (req,res)=> {
//   res.send("Hello,This is hotels endpoint")
// })

// CREATE
router.post("/",createHotel);

// UPDATE
router.put("/:id",updateHotel);

//DELETE
router.delete("/:id",deleteHotel);

//GET
router.get("/:id",getHotel);

// GET ALL
router.get("/",getHotels);



export default router