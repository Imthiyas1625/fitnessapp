import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/ExerciseDetail.css";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(data);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchExerciseDetail();
    }
  }, [id]);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (!exerciseDetail) return <p className="error-text">Exercise not found.</p>;

  // Ensure instructions is an array
  let instructionsArray = [];
  if (Array.isArray(exerciseDetail.instructions)) {
    instructionsArray = exerciseDetail.instructions.slice(0, 4); // Use first 4 items
  } else if (typeof exerciseDetail.instructions === "string") {
    instructionsArray = exerciseDetail.instructions.split(". ").slice(0, 4); // Convert to array
  }

  return (
    <div className="exercise-detail">
      <h2 className="exercise-name">{exerciseDetail?.name}</h2>
      <img className="exercise-image" src={exerciseDetail?.gifUrl} alt={exerciseDetail?.name} />
      <div className="exercise-info">
        <p><strong>Body Part:</strong> {exerciseDetail?.bodyPart}</p>
        <p><strong>Equipment:</strong> {exerciseDetail?.equipment}</p>
        <p><strong>Target Muscle:</strong> {exerciseDetail?.target}</p>
        <p><strong>Instructions:</strong></p>
        <ul className="exercise-instructions">
          {instructionsArray.length > 0 ? (
            instructionsArray.map((instruction, index) => (
              <li key={index}>{instruction}.</li>
            ))
          ) : (
            <li>No instructions available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseDetail;
