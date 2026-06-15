import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Profile: QuartzComponent = () => {
  return (
    <a href="/miniMinn.md/" class="profile-link-wrapper">
      <div class="profile-card">
        <img
          src="https://avatars.githubusercontent.com/u/133675347?v=4"
          class="profile-avatar"
        />

        <h3>miniMinn</h3>

        <p>SOC • DFIR • Linux</p>

      </div>
    </a>
  )
}

export default (() => Profile) satisfies QuartzComponentConstructor
