const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controller/thoughtController");

router.route("/").get(getThoughts)
router.route('/:userId').post(createThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
