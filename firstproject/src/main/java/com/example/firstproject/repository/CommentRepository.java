package com.example.firstproject.repository;

import com.example.firstproject.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//ctrl + JpaRepository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    //게시글 모든 댓글 조회
    @Query(value = "SELECT * FROM comment WHERE article_id = :articleId", nativeQuery = true)
    List<Comment> findByArticleId(Long articleId);
    //닉네임 모든 댓글 조회
    List<Comment> findByNickname(String nickname);
}
