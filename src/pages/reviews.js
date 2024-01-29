import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Input,
  Textarea,
  VStack,
  HStack,
  Collapse,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: "", comment: "" });
  const [editReviewId, setEditReviewId] = useState(null);

  const handleAddReview = () => {
    const updatedReviews = [...reviews, { ...newReview, id: Date.now() }];
    setReviews(updatedReviews);
    setNewReview({ user: "", comment: "" });
  };

  const handleEditReview = (id, editedComment) => {
    const updatedReviews = reviews.map((review) =>
      review.id === id ? { ...review, comment: editedComment } : review
    );
    setReviews(updatedReviews);
    setEditReviewId(null);
  };

  const handleDeleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <Box className="review-app" p={4}>
      <Text fontSize="2xl" mb={4}>
        Review System
      </Text>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Input
            placeholder="User"
            value={newReview.user}
            onChange={(e) =>
              setNewReview({ ...newReview, user: e.target.value })
            }
          />
          <Textarea
            placeholder="Comment"
            value={newReview.comment}
            onChange={(e) =>
              setNewReview({ ...newReview, comment: e.target.value })
            }
          />
          <Button colorScheme="blue" onClick={handleAddReview}>
            Add Review
          </Button>
        </HStack>

        <Collapse in={reviews.length > 5}>
          <VStack align="stretch">
            {reviews.slice(0, 5).map((review) => (
              <Box key={review.id} borderWidth="1px" borderRadius="md" p={4}>
                <Text fontWeight="bold">User: {review.user}</Text>
                <Text>Comment: {review.comment}</Text>
                {editReviewId !== review.id ? (
                  <HStack spacing={2}>
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => setEditReviewId(review.id)}
                    />
                    {review.user === newReview.user && (
                      <IconButton
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteReview(review.id)}
                      />
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={2}>
                    <IconButton
                      icon={<CheckIcon />}
                      onClick={() =>
                        handleEditReview(
                          review.id,
                          prompt("Edit comment:", review.comment)
                        )
                      }
                    />
                    <IconButton
                      icon={<CloseIcon />}
                      onClick={() => setEditReviewId(null)}
                    />
                  </HStack>
                )}
              </Box>
            ))}
          </VStack>
        </Collapse>
      </VStack>
    </Box>
  );
}

export default Review;
