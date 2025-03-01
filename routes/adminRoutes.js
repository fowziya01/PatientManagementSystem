const express= require("express");
const router = express.Router();
const {getUsers,getUserById,deleteUser,newAppointments,getappointments,deleteappointment,generateReport}= require("../controller/adminController");
const {authMiddleware,roleAuthMiddleware} = require("../middleware/authMiddleware")

router.get("/users",getUsers);
router.get("/users/:id",authMiddleware,roleAuthMiddleware(["admin"]),getUserById);
router.delete("/users/:id",authMiddleware,roleAuthMiddleware(["admin"]),deleteUser);
router.post("/addappointments",newAppointments);
router.get("/appointments",authMiddleware,roleAuthMiddleware(["admin"]),getappointments)

router.delete("appointments/:id",deleteappointment)
router.get("/reports",generateReport);
module.exports=router;