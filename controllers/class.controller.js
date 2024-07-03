import HttpStatusCode from "../enums/HttpStatusCode.js";
import Class from "../models/Class.js";

export async function getAllClasses(req,res) {
  try {
    const classes = await Class.findAll();
    if (!classes.length) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "Classes Not Found" });
    }else{
        return res.status(HttpStatusCode.OK).json(classes)
    }
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}
