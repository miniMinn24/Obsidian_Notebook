import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Profile: QuartzComponent = () => {
  return (
    <a href="/" class="profile-link-wrapper">
      <div class="profile-card">
        <img
          src="/static/avatar.jpeg"
          class="profile-avatar"
        />

        <h3>miniMinn</h3>

        <p>SOC • DFIR • Linux</p>

        <div class="profile-links">
          <span>
          <a href="https://www.linkedin.com/in/min-maung-maung-03352028a/">
            Linkedin
          </a>
          </span>
          <span>
          <a href="https://linktr.ee/miniminntechdiary.edu">
            LinkTree
          </a>
          </span>
        </div>

      </div>
    </a>
  )
}

export default (() => Profile) satisfies QuartzComponentConstructor
