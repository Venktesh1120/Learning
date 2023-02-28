import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
TVShowAPI.fetchPopulars();
export function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>TV Show Details</div>
      <div className={s.recommended_tv_show}> Recommended TV Show</div>
    </div>
  );
}
