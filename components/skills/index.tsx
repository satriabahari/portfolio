import React from 'react'
import SkillCard from './SkillCard'
import SkillList from './SkillList'
import PageContainer from '../PageContainer'

export default function Skills() {
  return (
    <PageContainer sectionName='Skills' noHFull>
      <SkillList/>
    </PageContainer>
  )
}
