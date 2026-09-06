import { useNavigate, useParams } from "react-router-dom";

export default function TestDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <p>passed param id - {params.id}</p>
      <button onClick={() => navigate("/settings")}>
        Test navigate to settings page
      </button>
    </div>
  );
}
