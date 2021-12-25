import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Visualization and Quantification of Geometric Diversity in Metal–Organic Frameworks (2021)',
    content: () => (
      <>
        Thomas C. Nicholas; Eugeny V. Alexandrov; Vladislav A. Blatov; Alexander
        P. Shevchenko; Davide M. Proserpio; Andrew L. Goodwin; and Volker L.
        Deringer; <br></br>
        <ExternalLink href="https://pubs.acs.org/doi/10.1021/acs.chemmater.1c02439">
          <i>Chem. Mater.</i>, <strong>33</strong>, 8289–8300
          (<strong>2021</strong>).
        </ExternalLink>


        <br></br><br></br>

        With ever-growing numbers of metal–organic framework (MOF) materials
        being reported, new computational approaches are required for a
        quantitative understanding of structure–property correlations in MOFs.
        Here, we show how structural coarse-graining and embedding
        (“unsupervised learning”) schemes can together give new insights into
        the geometric diversity of MOF structures. Based on a curated data set
        of 1262 reported experimental structures, we automatically generate
        coarse-grained and rescaled representations which we couple to a
        kernel-based similarity metric and to widely used embedding schemes.
        This approach allows us to visualize the breadth of geometric diversity
        within individual topologies and to quantify the distributions of local
        and global similarities across the structural space of MOFs. The
        methodology is implemented in an openly available Python package and is
        expected to be useful in future high-throughput studies.
      </>
    ),
  },
  {
    title: 'Intermediate Range Order in Metal-Ammonia Solutions: Pure and Na-Doped Ca-NH3 (2021)',
    content: () => (
      <>
        Thomas C. Nicholas; Thomas, F. Headen; Jonathan C. Wasse; Christopher A.
        Howard; Neal T. Skipper; Andrew G. Seel;<br></br>
        <ExternalLink href="https://pubs.acs.org/doi/10.1021/acs.jpcb.1c03843">
          <i>J. Phys. Chem. B</i>, <strong>125</strong>, 7456–7461
          (<strong>2021</strong>).
        </ExternalLink>

        <br></br><br></br>

        The local and intermediate range ordering in Ca–NH3 solutions in their
        metallic phase is determined through H/D isotopically differenced
        neutron diffraction in combination with empirical potential structure
        refinements. For both low and high relative Ca concentrations, the Ca
        ions are found to be octahedrally coordinated by the NH<sub>3</sub>
        solvent, and these hexammine units are spatially correlated out to
        lengthscales of ∼7.4–10.3 Å depending on the concentration, leading to
        pronounced ordering in the bulk liquid. We further demonstrate that this
        liquid order can be progressively disrupted by the substitution of Ca
        for Na, whereby a distortion of the average ion primary solvation occurs
        and the intermediate range ion–ion correlations are disrupted.
      </>
    ),
  },
  {
    title: 'Understanding the geometric diversity of inorganic and hybrid frameworks through structural coarse-graining (2020)',
    content: () => (
      <>
        Thomas C. Nicholas; Andrew L. Goodwin; Volker L. Deringer;<br></br>

        <ExternalLink href="https://doi.org/10.1039/D0SC03287E">
          <i>Chem. Sci.</i> <strong>11</strong>, 12580–12587
          (<strong>2020</strong>).
        </ExternalLink>

        <br></br><br></br>

        Much of our understanding of complex structures is based on
        simplification: for example, metal–organic frameworks are often
        discussed in the context of “nodes” and “linkers”, allowing for a
        qualitative comparison with simpler inorganic structures. Here we show
        how such an understanding can be obtained in a systematic and
        quantitative framework, combining atom-density based similarity (kernel)
        functions and unsupervised machine learning with the long-standing idea
        of “coarse-graining” atomic structure. We demonstrate how the latter
        enables a comparison of vastly different chemical systems, and we use it
        to create a unified, two-dimensional structure map of experimentally
        known tetrahedral AB<sub>2</sub> networks – including clathrate
        hydrates, zeolitic imidazolate frameworks (ZIFs), and diverse inorganic
        phases. The structural relationships that emerge can then be linked to
        microscopic properties of interest, which we exemplify for structural
        heterogeneity and tetrahedral density.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="publications">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Publications</h1>
      <div>
        {FAQS.map(({ title, reference, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
