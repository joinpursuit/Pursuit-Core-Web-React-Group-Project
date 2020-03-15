import React, { useState, useEffect } from "react";
import axios from "axios";

const Likes = ({ id }) => {
  const [likes, setLikes] = useState([]);
  const fetchLikes = async url => {
    try {
      let res = await axios.get(url);
      const { result } = res.data.body;
      setLikes(result);
    } catch (error) {
      console.log(error);
      setLikes([]);
    }
  };

  const handleLike = async e => {
    try {
      if (e.target.alt === "insertLike") {
        await axios.post(`/likes/post/${id}/${sessionStorage.userID}`);
        fetchLikes(`/likes/post/${id}`);
      } else {
        await axios.delete(`/likes/${id}/${sessionStorage.userID}`);
        fetchLikes(`/likes/post/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLikes(`/likes/post/${id}`);
  }, []);

  return (
    <>
      <img
        alt="insertLike"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFH0lEQVR4Xu2bB4hcVRSGv9hbRGIvERsWsIsoVuyCXWMXFRUFjRKx996wgFiwI/YSOxiIJopiQUURUZNoLBgsKLaIvfEt58nb3ZnJ25k3b59z98DC7s5t/3/Pvfe0GUXiMipx/IwQMKIB9WBgKeAcYFdgDPAp8BRwHfBlN5dYhyOwAvASsGIDoD8CxwH3dIuEOhBwG3BkAHTn3wc2BNSKTE4CrukGCXUg4DFgzwC3EPALMC9wPHAZMB/wT7R5smwS6kbAwPXsBkjQ3MBXwBrAD2WSUHcCxHoxcFaAPg+4MDUCFgQ+ApYJLfDS/LMsEv4PGiDWi4CzA/SOwDOpEbAB8GaAvgI4PTUC5gK+B0YDU4Dte4UAj+CHwCrAt8DiLYC9AWwEfAKs3CsEbBZWoHhuB45qAUzTWFP5Z2DhXiHgZuDoALMN8HwLYA8A+8fnpV3epQ3Uxo64i58DiwIfA6uGxddsqEeAvYE/wjpsY8rBXYaTANX91liSnqAGTyuZCqglXw/wEzoiYrgIcN63gXWA34GVgC/mgGQ6sDrwDrBuR6hznYeLgJ2BSbGOe4FD5gBIh+incJL0DTwKpchwEfAqsEmceY0ctaGVrA+8FQ20Cs8tBT0Migmqii5sgQ4m0Gt7IZ6rRsPsCzwUHxTdzWOBG6LPTYAEFhUv2ldCgwb1yTRgEcAn6cAGpBSdKN9Oo+ZE4K4BnbXk3gXGhkOzHvBegQkeBPYr0K5Zk1/DrdaM7qdtEuDP5DLNy9wqDgbuy/2tsXNE/H0tMKEgKNueULBtq2Z/AzcCpwCS0gfeC8U3VpkZnle7gUgDF5sDpwLzhPvqbvt255893313f3ZBUI7luEM9muJbC3AjNKMzeRnwIp5tg3xMbu1Q0YLratrM+J1HQNHcXTrOvaEuydg6zmWn8wylv2E375HlotPjwF4SkMXkfmuD4WYLOAy4Mz582IlCI/yXpm9mAA0FQBltlwU0qNaMwbbLE+CZMPpShuQJyI93BnB5GRN0MMbGwGvR//qqCFDtxwO3dLDwMru62fMDj1ZBwAfAoUN8u8sEO3AsL2rNb4Ms91dBwAGA73hdxAyUCRjl6hQJOBO4JAg4KDUCtgBeDPDaIGNTI8BY4ox4kp8Dtk2NADffnIJRZWOLo1MkwJoDn2RlyRQJ0ArNos9jUiNAvNMitNYXW0yNAAstrgr1v8PCjJQI2BTQDRazprDu+IyUCBgH6Jkqxiuu9JeUCNgDMAag/Geep0SAofe7g4DdowwvKQ2wvOb8IMDwWF+9QUoaYKh+S8DI12L5oGgWEutWRKgO7vBWkXl2w58Gdsl88xQ0YKeoNF0iQO8APJsKAdYdG+I3Gq30GT/5yEyva8DywKwAbDLW279fiV2vE2CeM8sjWllmaqyf9DoBZpEvCMQN6wurIMBXxtoeQ+NVimk0I9JWln4HmBTxCaxcA5zQ7wMcHiVxVZGgrX9yTObv2v+DpAoNyCaVfU1Rc/V/dZkF85FZ9Zl+v6kwU/YNCZgI7BOLMjVWhqoeA1jIoHwW9QBdxtxweLFYW2j6v6GoAflydPP15uI7Eb/0YALSG1hZLVLb3sKmqqsSnz/f/KbgXYgEWJ9n1Ya5MsWS1G/aXKXjWcHlhaM4uZZYJhLQ6LtBbU7XtJsx/9eLaLMLVqzaMFhovqwssaZXG9wjUFvJCHCBVmCcBhg6spanHbEExaKkJ4BLm1087QzcrT55Aro1R63HHSGg1ttTweKS14B/AbEwQZP3Bw6JAAAAAElFTkSuQmCC"
        onClick={handleLike}
      ></img>
      <img
        alt="deleteLike"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFNElEQVR4Xu2bd4glRRCHvxNzAk89FRU5VDCgYsKA4RATBtAzKyZEzwSKoqiYI5j+OUVUMKPeiXpmUcwBxQgqghEjZj0xZ76l5m5Y33s7Mztv5u311j+77213Vdevq6u7wk4gcZqQuP6MAzBuAXMRWAjYC9gEWLwiMP8AXwB3Ay9X5NHotOwIrAHcC6xeo/RrgKOBv2vkWTsrAVgMeAOYXDt3OB84ow98a2MpAO7SlcHxQeA44JuKEuS3KXALMBH4FVge2BjYD9gSmFSRd5lpPwH3AWcDX/Wa6IJvjcX9CywHfF1GUpexpwIXxt8+AVaugWcVFp8C2wDvdpssADqs3YDfgEWqSOkw52Dghg7fvwe8Dwh2P2lNYJUQ8DawYVjj/2Q2BYAO9rwGbwY3UpnbhsZnhvxWADgXOKuf292Ft8f5HWDJ8GkrAn8MH9uEBewJ3NkCAIq8DDghZO8APJIaAFsDT4bSpwMXpAaAb5sPQml3fxfgzzwI8/oR8M3xGTB/KH0bsH9KAKjrjsCNuQfY1Lj6h3CY1y0g22wDvOeB+YBn40WaFAAq+zDgTWDEujTwQ0oWoK6nABeFSRiTaAnJHAF1PSCCNH+f8zZJxQeo9D7A7WEB+wIzUrOAA4GbAgCVF4SkjoAh+UsR8qu7EfA9KR0Bld4MeC42/lFg+9QAEAQB2DzyA0ukCIDJ2sPDF0xKEYDrgUMCgIkpAvAWsBbwnS/C1ADYAngmdv8JE6apAbBO5CUXjILN5NQAcPOPAK4OK5jWBABWhqwQDQqtCpiel6Y3AYCCLL6I/M8DgILm/3usY2ZTACjvFWCnkUpVDQCkzhZs/TmrCQCsOC0cir0JbAV834Ci3USYC3g6/nhFEwAcFuZvWkoyTb0d8FcLIJgJMhFiO4A0RQAMDfeOVNFSwI81LMxihEUJyfKUUZiKrx/fmZk5rQY5ZVisG7pmylsTnSoAJwKXBifj5WMAy8tVaT3gAcBSlDl4y+O+ulYKP2Cq2jPoo+SFqkJKzLNQqk6+/3WA0qtRNZ4tAO66FVRraZKmWRUAs67W4jKy7+DY3Oedgfvj8+vARgU7SKw2XwIsUEJxh1oPGN7uMwuQ35ClZy0ynk8bCpYtKaDXcPl5tHSCecr6EfxO/3BdAZlWdfQboyErRJbHLI7MoXybnA7CBdnhUbVPwLr/l14vUZ7u1AfgUbBqq4yPgdWGl6s6aGmzhU0X0mshowgYpsA/Aux8eaiTtbXVJ6jP0fdIh3ZppsgraD7fvL7kvMuLaF9kTFsArAB8CNiaZ4OWHroXaZ1Z39LNwEFFlCsypi0AXFs+MTEFeGqEBdt/qKN+MY5pEf1GHNMmAPbtZM2UOkYLF73IK1NnbbVXP1ILtQmAChgfbBA3hcdiqF7XhbxVrO/berdoLdrnrsG6+JXl4xthekwyWry2B4M7oqTlkNo2rjZGZTWP8csAn8cDRx+gL+hGdn3tGqFsFlxVFDt3WtsAuJLH4ln6S7TtdlPK+r6FDQHzmV0LDQIARRs1v432WwsbxhG10FgBwDS26WxpeHwxKiDGCgB2ep4Tmu4B3DUqrXOTxwIAxgz2F3tNzo6fXoW10FgA4GLgpNDWGCL7PQkApgFXxb1vLGA2R2dYGw2CBXied4+UnG0sj0eIfHz8H4PKGtba0OBrsFYaBACOjF3uppgZKi2hSOKkNDiDAICLNkl6cjQy5pUwjX5U1tJWWrsCEwYFAJe6tlnaeOV53s0iexw0/77RIAHQNyV7MR4HoBXYB0ho8hbwHz0iSLgWGdUhAAAAAElFTkSuQmCC"
        onClick={handleLike}
      ></img>
      <h3 id="likes">
        <strong>{likes.length}</strong> likes
      </h3>
    </>
  );
};

export default Likes;
