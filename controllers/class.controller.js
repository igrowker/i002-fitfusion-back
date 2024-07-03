import HttpStatusCode from "../enums/HttpStatusCode.js";
import Class from "../models/Class.js";

export async function getAllClasses(req, res) {
  try {
    const classes = await Class.findAll();
    if (!classes.length) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "Classes Not Found" });
    } else {
      return res.status(HttpStatusCode.OK).json(classes);
    }
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

export async function getClassById(req, res) {
  try {
    const { id } = req.params;
    const classd = await Class.findByPk(id);
    if (!classd) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "GetClass Not Found" });
    } else {
      return res.status(HttpStatusCode.OK).json(classd);
    }
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

export async function updateClassByID(req, res) {
  try {
    const { id } = req.params;
    const classBody = req.body;
    const classd = await Class.findByPk(id);
    if (!classd || !classBody) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "Class update Not Found" });
    } else {
      const newClass = await classd.update(classBody);
      return res.status(HttpStatusCode.OK).json(newClass)
    }
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

export async function deleteClassByID(req, res){
  try {
    const { id } = req.params;
    const classd = await Class.findByPk(id);
    if (!classd) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "Class update Not Found" });
    }else{
      await classd.destroy()
      return res.status(HttpStatusCode.OK).json({status:"ok", message:"Class deleted"})
    }
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}
