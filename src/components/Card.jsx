import React from "react";

function Card({
  data: {
    volumeInfo: {
      title,
      subtitle,
      description,
      imageLinks: { thumbnail },
    },
  },
}) {
  return (
    <div
      className="w-full h-40 bg-slate-900 rounded-xl overflow-hidden flex"
    >
      <div className="w-40 h-full flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-5">
        <h2 className="text-white/85 mt-3 text-2xl font-medium">{title}</h2>

        <h3 className="text-white/70 text-sm font-thin tracking-wide">
          {subtitle}
        </h3>

        <p className="text-orange-500 mt-2 truncate-multiline">{description}</p>
      </div>
    </div>
  );
}

export default Card;
