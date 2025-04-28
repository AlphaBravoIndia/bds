import { TagForm } from "~/app/admin/tags/_components/tag-form"
import { withAdminPage } from "~/components/admin/auth-hoc"
import { Wrapper } from "~/components/admin/wrapper"
import { findToolList } from "~/server/admin/tools/queries"

const CreateTagPage = () => {
  return (
    <Wrapper size="md">
      <TagForm title="Create tag" tools={findToolList()} />
    </Wrapper>
  )
}

export default withAdminPage(CreateTagPage)
