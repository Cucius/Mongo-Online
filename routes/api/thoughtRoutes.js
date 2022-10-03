const router = require("express").Router();
const { getThought, getSingleThought, createThought, updateThought, deleteThought, addThoughtResponse, deleteThoughtResponse } = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addThoughtResponse);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteThoughtResponse);

module.exports = router;
