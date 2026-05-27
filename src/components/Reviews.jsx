import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fjxiqdgzhskzrgyhamcg.supabase.co",
  "sb_publishable_UAj3gAx1BKX6wR1EYgYNvg_okXTsukC",
);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", title: "", review: "" });
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("reviews").insert([formData]);

    if (error) {
      alert("Error submitting review: " + error.message);
    } else {
      setFormData({ name: "", title: "", review: "" });
      fetchReviews();
      alert("Review submitted successfully!");
    }
    setLoading(false);
  };

  return (
    <section className="max-w-7xl mx-auto border-b-2 pb-20" id="reviews">
      <div className="my-20"></div>
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
        Reviews
      </h2>

      {/* Fixed: Use a string here instead of REVIEWS.text */}
      <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
        See what our clients have to say about the unforgettable vibes DJ Babs
        brings to every event.
      </p>

      {/* --- REVIEW FORM --- */}
      <div className="max-w-xl mx-auto mb-20 p-6 border border-neutral-700 rounded-2xl bg-black">
        <h3 className="text-center mb-6 text-lg">Leave a Review</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Title (e.g. Wedding Client)"
            className="p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Your Review"
            rows="4"
            className="p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
            value={formData.review}
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black py-3 rounded-lg font-bold hover:bg-neutral-300 transition"
          >
            {loading ? "Submitting..." : "Post Review"}
          </button>
        </form>
      </div>

      {/* --- DISPLAY REVIEWS --- */}
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs"
          >
            <p className="mb-4 text-center">"{review.review}"</p>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 mr-4"></div>
              <div>
                <p className="text-sm font-bold">{review.name}</p>
                <p className="text-sm text-neutral-500">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
