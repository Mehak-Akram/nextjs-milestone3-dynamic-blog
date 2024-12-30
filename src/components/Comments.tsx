import { useState } from "react";
import { CardContent, Card } from "./ui/card";
import { Input } from "./ui/Input";
import { Button } from "./ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}
export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState(" ");
  const [authorName, setAuthorName] = useState(" ");
  const [editingCommentId, seteditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };
  const hadleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      seteditingCommentId(commentID);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editingCommentId
          ? { ...comments, text: newComment, author: authorName }
          : comments
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      seteditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-accent">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent>
                <div className="font-semibold text-white mt-2">
                  {comment.author}
                </div>
                <p className="text-white mt-2">{comment.text}</p>
                <Button
                  onClick={() => hadleEditComment(comment.id)}
                  className="mt-4 text-black bg-accent w-28 h-11 hover:bg-black hover:text-white border-[1px] border-accent"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-white">no comments yet</p>
        )}
      </div>
      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="your name"
          className="w-ful mb-2 text-white border-accent h-16"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-ful mb-2 text-white border-accent h-16"
        />
        <Button
          onClick={
            editingCommentId ? handleSaveEditedComment : handleAddComment
          }
          className="mt-4 bg-accent w-32 h-11 hover:bg-black hover:text-white border-[1px] border-accent"
        >
          {editingCommentId ? "Save" : "Add Comments"}
        </Button>
      </div>
    </div>
  );
}
