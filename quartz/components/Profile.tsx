import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Profile: QuartzComponent = () => {
  return (
    <a href="/miniMinn.md" class="profile-link-wrapper">
      <div class="profile-card">
        <img
          src="https://media.licdn.com/dms/image/v2/D5635AQGz7-ZwQ1qt8w/profile-framedphoto-shrink_800_800/B56Z4WN7RpIQAg-/0/1778489210308?e=1779717600&v=beta&t=wwanKgX0JVL36T-bFyEaIfvhnMDMI3T4LNlq34aMank"
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
